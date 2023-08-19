# build phase

# base image
FROM node:16-alpine as builder

# working directory
WORKDIR /app

# copy and install the dependencies
COPY package.json .
RUN npm install

# copy all of the source code
COPY . .

# build
RUN npm run build

# run phase
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# we don't need start command. when we run the container it is automatically starts nginx
