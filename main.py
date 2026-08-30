from sqlite3 import IntegrityError

from database import create_tables, get_connection
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Wanderly Backend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    name: str
    email: str
    password: str


class LoginData(BaseModel):
    email: str
    password: str


class Contact(BaseModel):
    name: str
    email: str
    subject: str
    message: str


create_tables()


@app.get("/")
def home():
    return {"message": "Wanderly Backend is Working!"}


@app.post("/register")
def register(user: User):
    connection = get_connection()
    cursor = connection.cursor()

    try:
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            (user.name, user.email, user.password),
        )
        connection.commit()
        return {"message": "Registration successful!"}

    except IntegrityError:
        return {"message": "Email already registered!"}

    finally:
        connection.close()


@app.post("/login")
def login(user: LoginData):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        (user.email, user.password),
    )

    result = cursor.fetchone()
    connection.close()

    if result:
        return {"message": "Login successful!"}

    return {"message": "Invalid email or password!"}


@app.post("/contact")
def contact(data: Contact):
    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
    (data.name, data.email, data.subject, data.message),
)

    connection.commit()
    connection.close()

    return {"message": "Message sent successfully!"}