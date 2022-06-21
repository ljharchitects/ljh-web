---
title: "어떻게 하면 버려질 수 있는 옥상 공간을 활용할 수 있을까?"
date: "2020-04-20"
excerpt: "관람시선 간섭을 최적화한 계획안"
cover_image: "/images/posts/view_optimization/ViewOptmization_fin.png"
tags:
  - "architecture"
  - "computational design"
---

요즘은 풋살경기장 신축공사 현장에 나가고 있습니다. 설계단계에서부터 참여했다면 좋았겠지만, 계획안이 이미 확정된 상황에서 공사관리업무로 참여하게 되었습니다. 현재 계획안은 배치도에서 볼 수 있듯이 풋살경기장 5개와 클럽하우스(1층 카페, 2층 운영사무실)가 배치되어 있습니다.

<div>
<img src="/images/posts/view_optimization/ViewOptmization_site.jpg" width="100%" height="100%"/>

<img src="/images/posts/view_optimization/ViewOptmization_birdeye.jpg" width="100%" height="100%"/>
</div>

기존의 설계안도 충분히 괜찮지만 개인적으로 아쉬운 부분들이 있어서, '나라면 어떻게 설계했을까'라는 주제로 한번 계획설계를 해보았습니다.

클럽하우스는 1층 카페, 2층 운영사무실로 프로그램의 성격이 구분되어 있습니다. 층별로 성격이 다른 프로그램을 나누는 방식은 일반적이면서도 확실한 방법입니다. 다만 그런 구분때문에 기존 계획안의 2층 외부 공간이 이미지처럼 많은 사람들이 활용할지에 대해서는 미지수 입니다. 프로그램 성격의 구분과 수직동선에 의한 이동 간섭은 이용객들에게 개방성과 접근성을 제한하기때문입니다.

그렇기에 버려질 수 있는 옥상 외부공간을 활용하여 풋살파크 이용객들을 위한 관람석을 만들기를 제안합니다.

<div>
  <img src="/images/posts/view_optimization/ViewOptimization_Diagram_Line01.png" width="100%" height="100%"/>

  <img src="/images/posts/view_optimization/ViewOptimization_Diagram_Line02.png" width="100%" height="100%"/>
</div>

이는 외부에서 쉽게 접근 가능한 오픈된 공간입니다. 경기장 이용객들의 모임 장소 또는 경기를 관람하기위한 관람석이 될 수 있습니다. 그러나 이러한 계단식 매스계획에는 몇가지 문제점이 있습니다.

1. 내부공간의 활용도가 떨어집니다.
   내부공간을 극대화하면 옥상 관람석으로의 접근성이 떨어집니다. 반대로 접근성만 고려한다면 사용가능한 내부공간이 줄어들게 됩니다.

2. 대지에서 클럽하우스의 배치가 중심에 위치하지 않습니다. 그리고 경기장에대한 시선 간섭이 발생합니다. 경기장 관람시선 간섭을 최소화 할 수 있는 매스형태가 필요합니다.

큰 틀의 개념적인 매스는 정해졌으니, 이 2가지 문제점을 해결할 수 있는 최적의 값을 찾아보고자 합니다. 이 값을 찾기위해 grasshopper를 이용하여 optimization(최적화)를 진행하였습니다.

<div>
<video autoplay controls loop muted width="100%" height="100%">
  <source src="/images/posts/view_optimization/ViewOptimization.mp4">
</video>
</div>

아래의 그림은 시선 간섭을 도식화한 모습입니다. 보기에는 복잡해보일지라도 원리는 간단합니다. 관람객의 시선높이에서 경기장까지 선을 그립니다. 그리고 그 선이 중간에 장애물을 만나 간섭이 발생하는지 확는것이지요. 그렇게 간섭이 발생하는 선의 갯수를 수치화하면서 가장 적게 나오는 값을 찾는 것입니다.

<div>
  <img src="/images/posts/view_optimization/ViewOptmization_diagram_001.png" width="100%" height="100%"/>

  <img src="/images/posts/view_optimization/ViewOptmization_diagram_002.png" width="100%" height="100%"/>
</div>

그렇게해서 만들어진 매스를 바탕으로 적당한 디테일을 넣어줍니다. 거푸집의 역할과 구조재를 겸할 수 있는 철판으로 틀을짜고 그 속에 콘크리트를 타설합니다. 난간은 시선 간섭을 최소화 할 수 있는 유리난간으로 모듈화 시켜줍니다. 이렇게 만들어진 계획안에서 모든 부재의 길이는 모듈화 되어 있습니다. 비록 계획안으로 끝나는 프로젝트이지만, 만약 실제 시공으로까지 이어진다면 시공비 또한 많이 절감될 것으로 기대합니다.

<div>
<img src="/images/posts/view_optimization/ViewOptmization_fin.png" width="100%" height="100%"/>
</div>
