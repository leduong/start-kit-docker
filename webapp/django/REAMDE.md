# Django Seed

## Requirements
- python3
- python3-venv

Create virtual environment Python 3
```
apt-get install python3-venv
python3 -m venv .venv
```

## Step by Step

```
source .venv/bin/activate
pip install requirements.txt
python -m django --version
```

## How to Start

```
# Start dev server
$ make run

# Stop docker
$ make down

# Deploy heroku
$ make heroku
```