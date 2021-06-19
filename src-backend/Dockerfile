FROM golang:alpine
MAINTAINER ksuke nakamura

RUN mkdir /go/src/app

WORKDIR /go/src/app

COPY . /go/src/app
# RUN go build -o serve serve.go

# CMD ["./serve"]

RUN go get -u github.com/cosmtrek/air

CMD ["air"]