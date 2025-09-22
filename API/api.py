from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext
from sqlalchemy.orm import Session

import models
import schemas
from database import SessionLocal, engine

# ✅ Create tables automatically
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# ✅ Enable CORS
origins = ["http://localhost:3000", "http://127.0.0.1:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# ✅ DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# -------------------- AUTH --------------------
@app.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    hashed_pw = get_password_hash(user.password)
    new_user = models.User(username=user.username, password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.username == user.username).first()
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}

# -------------------- ENROLLMENT --------------------
@app.post("/enroll", response_model=schemas.EnrollmentResponse)
def enroll_student(enroll: schemas.EnrollmentCreate, db: Session = Depends(get_db)):
    new_student = models.Enrollment(**enroll.dict())
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

@app.get("/students", response_model=list[schemas.EnrollmentResponse])
def get_students(db: Session = Depends(get_db)):
    return db.query(models.Enrollment).all()

# -------------------- PERFORMANCE --------------------
@app.post("/performance", response_model=schemas.PerformanceResponse)
def add_performance(perf: schemas.PerformanceCreate, db: Session = Depends(get_db)):
    new_perf = models.Performance(**perf.dict())
    db.add(new_perf)
    db.commit()
    db.refresh(new_perf)
    return new_perf

@app.get("/performance/{student_id}", response_model=list[schemas.PerformanceResponse])
def get_student_performance(student_id: int, db: Session = Depends(get_db)):
    return db.query(models.Performance).filter(models.Performance.student_id == student_id).all()
main.py