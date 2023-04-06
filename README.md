# test-maps

## To receive API 
https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html#get-api-key

Do not forget to set restrictions by HTTP, otherwise your API will not work.

```
 Примечание.
JS API 3.0 работает только с ключами, у которых заполнено поле "Ограничение по HTTP Referer".
```



## To deploy locally 

```
git clone https://github.com/iFoxtrot33/test-maps.git
cd test-maps
npm install

(change API_KEY)
<head>
  <script src="https://api-maps.yandex.ru/3.0/?apikey=<ваш API-ключ>&lang=ru_RU"></script>
</head>

npm run dev
```

## Documentation
- https://yandex.ru/dev/maps/jsapi/doc/3.0/quick-start/index.html
- https://yandex.ru/dev/maps/jsapi/doc/3.0/examples/index.html
