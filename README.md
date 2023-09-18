# dmlistings

## Pre-requisites

```sh
npm i -g typescript ts-node
npm i
```

## Environment variables

Fill up the file "env" in the root folder and source

```sh
. env
```

Otherwise, export variables manually for your MongoDB Atlas cluster:

```sh
PORT=
MONGODB_CLUSTER=
MONGODB_HOST=
MONGODB_PORT=
MONGODB_DATABASE=
MONGODB_USER=
MONGODB_USER_PASSWORD=
MONGODB_LISTINGS_COLLECTION=

export PORT MONGODB_CLUSTER MONGODB_HOST MONGODB_PORT MONGODB_DATABASE MONGODB_USER MONGODB_USER_PASSWORD MONGODB_LISTINGS_COLLECTION
```

## Build

```sh
npm build
```

## Launch server

```sh
npm start
```
