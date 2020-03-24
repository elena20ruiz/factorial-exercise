# Events list

## Run backend

1. Requirements:
- Python 3
- virtualenv

### Usage

1. Create virtual environment and enter in:
```
virtualenv env --python=python3
source env/bin/activate
```

2. Install dependences:
```
pip install -r requirements.txt
```

3. Add environment variables on `.env`:
```
DB_USER=db_user
DB_PASSWORD=db_password
DB_DB=database
DB_HOST=db_host
DB_PORT=db_port
```
4. Run flask application
```
flask run
```

Now is running on port 5000, you can check the endpoints on `<url>:5000/ui`


## Run frontend

1. Requirements:

- Node.js
- NPM

2. Install depencences

```
npm install
```

3. Run on development mode

```
npm start
```


