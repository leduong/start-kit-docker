from pydantic import BaseModel
from typing import Optional, Text
from datetime import datetime


class Post(BaseModel):
    id: int
    title: str
    author: str
    content: Text
    created_at: datetime = datetime.now()
    published_at: datetime
    published: Optional[bool] = False
