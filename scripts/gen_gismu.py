import dictionary, words, gen_cmavo, r

class Gismu:

    def __init__(self, gismu, raw_data, docs):
        self.name = gismu
        self.eng_synonyms = raw_data[0]
        self.kor_meaning = highlight_sumti(raw_data[1])
        self.kor_synonym = raw_data[2]

        self.docs = None

        if gismu in words.gismu:
            self.docs = [ref.split('.') for ref in words.gismu[gismu]]
            self.docs = [r.search_by_chap(docs, int(d[0]), int(d[1])) for d in self.docs]

    def to_list(self):
        eng_synonyms = ", ".join([s for s in self.eng_synonyms])

        if self.docs is not None:
            refs = "\n    - 용례: " + ", ".join([f"[{d.major}.{d.minor}]({d.to_html_string()})" for d in self.docs])

        else:
            refs = ""

        return f"  - [[giant]]{self.name}[[/giant]][[anchor, id={self.name}]][[/anchor]]\n    - 뜻 풀이: {self.kor_meaning}\n    - 영어 동의어: {eng_synonyms}\n    - 한국어 동의어: {self.kor_synonym}{refs}"

    def __repr__(self):
        return self.to_list()

def highlight_sumti(string):
    return string.replace(
        "{{x1}}",
        "[[highlight=red]]x1[[/highlight]]"
    ).replace(
        "{{x2}}",
        "[[highlight=green]]x2[[/highlight]]"
    ).replace(
        "{{x3}}",
        "[[highlight=aqua]][[black]]x3[[/black]][[/highlight]]"
    ).replace(
        "{{x4}}",
        "[[highlight=emerald]][[black]]x4[[/black]][[/highlight]]"
    ).replace(
        "{{x5}}",
        "[[highlight=violet]]x5[[/highlight]]"
    )

gismu_list = []

for gismu, raw_data in dictionary.dictionary.items():
    gismu_list.append(Gismu(gismu, raw_data, r.docs))

gismu_list.sort(key = lambda g: g.name)

for gismu in words.gismu.keys():
    if gismu not in dictionary.dictionary:
        print(gismu)

gismu_template = """
# gismu 목록

## 읽는 법

- 본 페이지에는 gismu들이 사전순서로 정렬돼 있습니다. 뜻을 이용해서 gismu를 찾고 싶은 경우에는 Ctrl+F로 한국어/영어 뜻을 검색해보세요.
- 각 gismu에는 3개의 하위 항목이 있습니다. 순서대로 한국어 뜻풀이, 영어 동의어, 한국어 동의어입니다.
- 한국어 뜻풀이에서 {{x1}}, {{x2}}등으로 표시된 부분은 sumti가 들어갈 자리입니다.
- 용례의 링크를 클릭할 경우, 해당 gismu가 등장하는 챕터로 이동합니다. 챕터로 이동한 뒤 Ctrl+F로 다시 검색을 해주셔야 합니다.

"""

gismu_template = highlight_sumti(gismu_template)

if __name__ == "__main__":
    alphabet_indices = [gen_cmavo.AlphabetIndex(gismu_list, c) for c in 'abcdefghijklmnopqrstuvwxyz']
    alphabet_indices = [a for a in alphabet_indices if len(a.words) > 0]

    gismu_template += "[[giant]]알파벳 색인: " + " ".join([a.to_link() for a in alphabet_indices]) + "[[/giant]]"
    gismu_template += "\n\n"
    gismu_template += "\n".join([a.to_list_gismu() for a in alphabet_indices])

    print(gismu_template)