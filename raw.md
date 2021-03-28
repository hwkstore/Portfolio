# `MarkDown Language`

마크다운(이하 md) 언어는 마크업언어의 반대개념이다.  
## Header Text(타이틀)  
타이틀을 입력할때는 `#`을 사용합니다.  
개수에 따라서 `html`의 `<hn>`으로 동작합니다.  

```
# Header Level 1
## Header Level 2
### Header Level 3
#### Header Level 4
##### Header Level 5
```

# Header Level 1
## Header Level 2
### Header Level 3
#### Header Level 4
##### Header Level 5
<br>

>`이때 `#`뒤쪽은 반드시 1칸 공백을 유지하여야 한다.`

<br>

---

## Text Emphasis(텍스트 강조)  
```
*기울임꼴*의 강조는 `*`을 사용합니다.  
**두껍게**강조는 `**`을 사용합니다.  
~~취소선~~은 `~~`을 사용합니다.  
<u>밑줄</u>은 `<u></u>'를 사용합니다.  
```

*기울임꼴*의 강조는 `*`을 사용합니다.  
**두껍게**강조는 `**`을 사용합니다.  
~~취소선~~은 `~~`을 사용합니다.  
<u>밑줄</u>은 `<u></u>'를 사용합니다.  
<br>

>`이때 공백은 허용하지 않습니다.`

<br>

---

## List(목록)  
### Order List(순서있는 목록)
```
1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
        1. 순서가 있는 목록
        1. 순서가 있는 목록  
```

<br>

1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
1. 순서가 있는 목록
    1. 순서가 있는 목록
    1. 순서가 있는 목록
        1. 순서가 있는 목록
        1. 순서가 있는 목록  

<br>


### Unorder List(순서없는 목록)
```
- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
        - 순서가 있는 목록
        - 순서가 있는 목록
```

<br>

- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
- 순서가 있는 목록
    - 순서가 있는 목록
    - 순서가 있는 목록
        - 순서가 있는 목록
        - 순서가 있는 목록

<br>

---

<br>

## Hyper Link(하이퍼링크)  
```
[naver](https://www.naver.com)  
[google](https://www.google)  
[daum.net](https://www.daum.net)  
[Header Text(타이틀)](#Header-Text(타이틀))  
[Text Emphasis(텍스트 강조)](#Text-Emphasis(텍스트-강조))
```
[naver](https://www.naver.com)  
[google](https://www.google)  
[daum.net](https://www.daum.net)  
[Header Text(타이틀)](#Header-Text(타이틀))  
[Text Emphasis(텍스트 강조)](#Text-Emphasis(텍스트-강조))

`하이퍼링크`는 외부파일로 링크 할 수 있고, 문서 내에서의 링크도 가능하다.  
이때 문서 내부의 링크는 `#타이틀`로 링크 할 수 있으며, `타이틀`명의 공백은 `-(하이픈)`으로 반드시 대체되어야 한다.

<br>

---

<br>

## Insert Image(이미지 삽입)
```
![HTML](./images/skills_html.png)  
![CSS](./images/skills_css.png)  
![javaScript](./images/skills_js.png)  
![PhotoShop](./images/skills_ps.png)  
```
![HTML](./images/skills_html.png)
![CSS](./images/skills_css.png)
![javaScript](./images/skills_js.png)
![PhotoShop](./images/skills_ps.png)

<br>



