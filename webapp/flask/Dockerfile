FROM python:3.6
ENV PYTHONUNBUFFERED 1
WORKDIR /app
ADD ./requirements.txt ./
RUN --mount=type=cache,target=/root/.cache pip install -r requirements.txt
