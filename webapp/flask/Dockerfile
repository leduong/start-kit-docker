FROM python:3.9-slim-buster
ENV PYTHONUNBUFFERED 1
WORKDIR /app
ADD ./requirements.txt ./
RUN --mount=type=cache,target=/root/.cache pip install -r requirements.txt