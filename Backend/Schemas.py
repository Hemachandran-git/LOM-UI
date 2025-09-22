
from pydantic import BaseModel, EmailStr # type: ignore
from datetime import date
from typing import Optional

# ------------------ User (Student + Teacher) ------------------

# ✅ Common Login Schema
class LoginRequest(BaseModel):
    username: str
    password: str


# ✅ Student Schemas
class StudentCreate(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: Optional[str] = None


class StudentResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    full_name: Optional[str] = None

    class Config:
        orm_mode = True


# ✅ Teacher Schemas
class TeacherCreate(BaseModel):
    username: str
    password: str
    email: EmailStr
    department: Optional[str] = None


class TeacherResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    department: Optional[str] = None

    class Config:
        orm_mode = True


# ------------------ Enrollment ------------------
class EnrollmentCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str]
    dob: Optional[date]
    address: Optional[str]
    course: str
    status: Optional[str] = "active"


class EnrollmentResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    course: str
    status: str

    class Config:
        orm_mode = True


# ------------------ Performance ------------------
class PerformanceCreate(BaseModel):
    student_id: int
    subject: str
    attendance_percentage: float
    cgpa: float
    arrears: int


class PerformanceResponse(BaseModel):
    id: int
    subject: str
    attendance_percentage: float
    cgpa: float
    arrears: int

    class Config:
        orm_mode = True
schemas.py # type: ignore