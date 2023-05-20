import os

class Document:

    def __init__(self, name):
        self.major = int(name[:2])
        self.minor = int(name[3:5])
        self.title = name[6:-3]
        self.full = name

    # self -> String
    def to_string(self):
        return f"{self.major}.{self.minor}.{self.title}"

    # self -> String
    def to_html_string(self):
        return self.full[:-3] + ".html"

    # self, docs: Vec<Document> -> String
    def get_footer(self, docs):
        prev = self.get_prev(docs)
        next = self.get_next(docs)

        prev_str = f"<< [{prev.to_string()}]({prev.to_html_string()})" if prev is not None else "이전 글이 없습니다."
        next_str = f"[{next.to_string()}]({next.to_html_string()}) >>" if next is not None else "다음 글이 없습니다."
        return f"""
---

[[center]]
[메인으로 돌아가기](index.html)
[[/center]]

[[left]]
{prev_str}
[[/left]]

[[right]]
{next_str}
[[/right]]
"""

    # self, docs: Vec<Document> -> Document | None
    def get_prev(self, docs):

        if self.minor != 0:
            return search_by_chap(docs, self.major, self.minor - 1)

        elif self.major == 0:
            return None            

        curr_maj = self.major - 1

        while search_by_chap(docs, curr_maj, 0) is None:
            curr_maj -= 1

        curr_min = 0

        while search_by_chap(docs, curr_maj, curr_min) is not None:
            curr_min += 1

        curr_min -= 1

        return search_by_chap(docs, curr_maj, curr_min)

    # self, docs: Vec<Document> -> Document | None
    def get_next(self, docs):
        result = [
            search_by_chap(docs, self.major, self.minor + 1),
            search_by_chap(docs, self.major + 1, self.minor),
            search_by_chap(docs, self.major + 2, self.minor),
            search_by_chap(docs, self.major + 3, self.minor)
        ]
        result = [r for r in result if r is not None] + [None]

        return result[0]

# docs: Vec<Document>, major: Int, minor: Int -> Document | None
def search_by_chap(docs, major, minor):

    for doc in docs:

        if doc.major == major and doc.minor == minor:
            return doc

docs = []

os.chdir("/home/baehyunsol/Documents/Lojban/mdxts/documents")

for f in os.listdir():

    if len(f) > 9 and f[-3:] == '.md' and f[2] == '_' and f[5] == '_':
        docs.append(Document(f))

docs.sort(key=lambda d: d.major * 100 + d.minor)

chapters = [
    "들어가기 전에",
    "로지반에 대해",
    "로지반 훑어보기",
    "로지반 발음과 표기",
    "작업 중",
    "selbri 구조",
    "sumti",
    "대sumti, 대biridi",
    "관계사",
    "sumti 자리 바꾸기",
    "시공간 표현",
    "작업 중",
    "작업 중",
    "감탄사",
    "작업 중",
    "부정문",
    "작업 중",
    "작업 중",
    "숫자, 수량",
]

if __name__ == "__main__":

    for doc in docs:
        print(doc.get_footer(docs))

    for i, c in enumerate(chapters):
        print(f"- {i}. {c}")
        minor = 0

        while search_by_chap(docs, i, minor) is not None:
            d = search_by_chap(docs, i, minor)
            print(f"  - [{d.to_string()}]({d.to_html_string()})")
            minor += 1