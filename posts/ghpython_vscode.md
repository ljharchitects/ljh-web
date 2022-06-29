---
title: "grasshopper python 개발환경 설정"
date: "2022-06-27"
excerpt: "라이노 그래스호퍼 파이썬 개발환경 설정"
cover_image: "/images/posts/ghpython_vscode/ghpython_vscode-001.webp"
tags:
  - "computational design"
  - "grasshopper"
  - "python"
  - "vscode"
---

## 그래스호퍼의 빠른 개발 속도, 그러나 디버깅의 어려움

그래스호퍼에서 간단한 작업은 컴포넌트를 이용하기도 합니다. 그러나 조금이라도 규모가 크거나, 추후에 계속 사용할만한 기능을 만드는 경우 컴포넌트 작업은 적합하지 않습니다. 기능을 추가하거나 디버깅을 할때, 각각의 컴포넌트의 역할을 다시 생각해내기란 여간 어려운 일이 아닙니다.

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-001.webp" width="100%" height="100%"/>
  <figcaption>그래스호퍼는 빠르게 만들 수 있다는 장점이 있지만, 다음에 다시 작업을 하게 되면 수정할 생각에 눈앞이 깜깜해집니다.</figcaption>
</figure>

그래서 저는 조금이라도 프로젝트가 커질 가능성이 있으면 코드로 작업합니다. 물론 라이노는 C#에 대한 지원이 좋지만, 뭐든 빠르게 만들고 빠르게 피드백하면서 빠르게 수정하는 것이 좋다고 생각하기때문에 주로 파이썬을 이용해서 작업합니다. 물론 파이썬은 C# 대비해서 매우 느리지만 성능에 대한 부분은 어느정도 프로젝트가 마무리된 다음, 최적화 과정을 가져도 늦지 않습니다.

그러나 [visual studio code][1], [pycharm][1] 같은 에디터를 생각한다면, 그래스호퍼에서 제공하는 파이썬 에디터로 코드 작업을 하는 것은 아주 불편한 일입니다. 특히 맥용 라이노에서 제공하는 에디터는 메모장보다도 기능이 부족합니다. 그래서 스크립트는 그래스호퍼에서 돌아가되, 모든 코드 작업은 vscode에서 작업할 수 있도록 개발환경을 설정해보도록 하겠습니다.

## 개발환경 설정

### 준비물

우선 준비물에 필요한 프로그램들을 다운 받고 설치합니다. 참고 이미지는 맥이지만, 해당 메뉴들의 위치는 비슷하기때문에 윈도우에서도 별 무리 없이 따라할 수 있을거라고 생각합니다.

1. [visual studio code][1]<br>
   파이참도 좋은 툴이지만, 아무래도 무료라는 점에서 vscode를 이용해서 설명하겠습니다.

2. [python][3]<br>
   파이썬의 경우 현재(2022년) 3.10.5 버전이 나왔지만, 라이노에서 돌아가는 파이썬은 ironpython으로 2.7 버전을 사용하고 있습니다. 물론 어차피 에디터 환경만 vscode에서 사용하고, 실제 구동은 라이노 그래스호퍼 위에서 작동할 것이므로 버전을 꼭 맞춰줄 필요는 없습니다. 다만, 버전 2와 3의 차이로 인해 vscode의 타입 추론에 오류가 발생할 수 있습니다.

### 파이썬 설정

파이썬으로 여러가지 다른 프로젝트를 하신다면 가상환경 설정을 하셔도 되지만, 오로지 라이노 그래스호퍼 작업환경만을 위해서 파이썬을 사용 한다면, 굳이 가상환경을 설정할 필요는 없습니다. 따라서 가상환경에 대한 설명은 넘어가도록 하겠습니다.

작업할 위치에 폴더를 만들어줍니다. 저는 바탕화면에 'work'폴더를 만들고 거기에 작업환경을 만들도록 하겠습니다.

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-006.webp" width="100%" height="100%"/>
  <figcaption>탐색기 주소창에 cmd. 라고 입력하면 해당 경로의 명령 프롬프트 창이 열립니다</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-007.webp" width="100%" height="100%"/>
  <figcaption>탐색기 주소창에 cmd. 라고 입력하면 해당 경로의 명령 프롬프트 창이 열립니다</figcaption>
</figure>

커맨드 창에서 아래와 같이 입력합니다.

```bash
# cmd

python --version  # 파이썬 버전을 확인 합니다

pip --version  # pip 버전을 확인합니다

pip install rhino-stubs grasshopper-stubs  # 라이노와 그래스호퍼 타입 힌트를 위해 stubs를 설치합니다
```

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-008.webp" width="100%" height="100%"/>
  <figcaption>vs code에서 F1을 누른다음 select interpreter를 입력합니다</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-009.webp" width="100%" height="100%"/>
  <figcaption>설치한 파이썬 버전 (가상환경을 사용한다면 설정한 가상환경)을 선택합니다</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-010.webp" width="100%" height="100%"/>
  <figcaption>테스트를 위해 파일들을 생성합니다</figcaption>
</figure>

테스트를 위해 파일들을 생성합니다.
작업할 폴더 안에 아래처럼 파일 및 폴더를 생성합니다

```plain
C:.
│  main.py  # 그래스호퍼 파이썬 컴포넌트에서 실행시킬 코드
│
└─common
        util.py  # 모듈로 불러와서 사용할 코드
        __init__.py  # 폴더를 파이썬 모듈로 인식
```

main.py

```python
import common.util

print("main.py")
```

common/util.py

```python
import Rhino.Geometry as geo  # type: ignore
# type: ignore는 pylance warning 을 끄기 위함입니다

print(geo)
print("util.py")
```

### 라이노 설정

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-002.webp" width="100%" height="100%"/>
  <figcaption>라이노에서 'EditPythonScript' 커맨드를 입력해서 파이썬 에디터를 엽니다</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-003.webp" width="100%" height="100%"/>
  <figcaption>Tools > Options 선택</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-004.webp" width="100%" height="100%"/>
  <figcaption>Add to search path 선택</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-005.webp" width="100%" height="100%"/>
  <figcaption>위 파이썬에서 설정한 작업폴더를 지정합니다</figcaption>
</figure>

### 그래스호퍼 설정

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-011.webp" width="100%" height="100%"/>
  <figcaption>그래스호퍼에서 python 컴포넌트를 불러온 다음 Show "code" input parameter와 Input is path 옵션을 활성화 시킵니다</figcaption>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-012.webp" width="100%" height="100%"/>
  <figcaption>File path 컴포넌트를 불러와서 위에서 생성한 main.py를 등록합니다</figcaption>
</figure>

<figure>
  <img src="/images/posts/ghpython_vscode/ghpython_vscode-013.webp" width="100%" height="100%"/>
  <figcaption>그래스호퍼에서 정상적으로 호출한 모습</figcaption>
</figure>

이렇게 라이노 그래스호퍼 파이썬 개발환경을 설정해보았습니다. 이제 vscode에서 파이썬 코드를 작성하고 그래스호퍼에서는 해당 코드에 대한 연산만 하는 방식으로 작업을 할 수 있습니다. 그리고 이렇게 코드를 별도의 파일로 관리할 수 있게됨에 따라 git을 이용한 버전관리도 편하게 이용할 수 있습니다.

[1]: https://code.visualstudio.com/
[2]: https://www.jetbrains.com/ko-kr/pycharm/
[3]: https://www.python.org/
