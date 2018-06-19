[![Build Status](https://travis-ci.org/saltfish666/learn-node-test.svg?branch=master)](https://travis-ci.org/saltfish666/learn-node-test)
[![codecov](https://codecov.io/gh/saltfish666/learn-node-test/branch/master/graph/badge.svg)](https://codecov.io/gh/saltfish666/learn-node-test)

比如我们写了一个正则表达式，想匹配类似"/user/{{name}}"的url

写完之后如果我们自己一次次测试，那很麻烦，以后修改一下又要手动测试，

不如写个自动测试的流程。


### 讨厌的各种隐式规则

- mocha 自动寻找test目录

- mocha 5.0.0有bug,改3.0.0 可以用


```
npm test  // run mocha

npm run cover // run istanbul
```


### 其他
比较好奇travis怎么知道 `npm test` `npm run cover` 的结果？
