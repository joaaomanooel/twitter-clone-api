# Tweeter API :bird:

## **How to use**
### Cloning and runing

* Cloning git repository and entry in repository

```sh
$  git clone https://github.com/joaaomanooel/tweeter-clone-api.git
```
after

```sh
$  cd tweeter-clone-api
```

* Install Dependencies

```sh
$  npm i
```
or

```sh
$  yarm install
```

* Runing API
```sh
$  npm start
```
or with [nodemon]('https://nodemon.io/')
```sh
$  npm run dev
```

***
## Accessing
 ### **Tweet:**

**URL**
>`https://localhost:3000/api/v1/tweet/`

**Http Methods**
* Get All

    |  Methods  |  Params  |
    |:---------:|:--------:|
    |   `GET`   |   `null` |

***Rsponse example:***

```json
[
  {
    "author": "João Manoel Neto",
    "content": "Testing response =)",
    "createdAt": "2018-11-16T21:59:33.828Z",
    "likes": 1,
    "__v": 0,
    "_id": "5bef3df10010962795f0d54a"
  }
]
```

* Create a new

    |  Methods  |  Params  |
    |:---------:|:--------:|
    |  `POST`   |   `null` |


***Expected body request:***
```json
[
  {
    "author": "",   //String
    "content": "",  //String
  }
]
```

### **Likes:**

**URL**
>`https://localhost:3000/api/v1/likes/:id`

* Like a tweet

    |  Methods  |       Params        |
    |:---------:|:-------------------:|
    |  `PUT`    |`Tweet ID (objectId)`|

**Example request:**
> `https://localhost:3000/api/v1/likes/5bef3df10010962795f0d54a`

***Rsponse example:***
```json
{
  "author": "João Manoel Neto",
  "content": "Testing response =)",
  "createdAt": "2018-11-16T21:59:33.828Z",
  "likes": 2,
  "__v": 0,
  "_id": "5bef3df10010962795f0d54a"
}
```
***
## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/joaaomanooel/tweeter-clone-api/tags).

## Authors

| ![João Manoel Neto](https://avatars2.githubusercontent.com/u/17843076?v=3&s=150)|
|:---------------------:|
|  [João Manoel Neto](https://github.com/joaaomanooel/)   |

See also the list of [contributors](https://github.com/joaaomanooel/tweeter-clone-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
