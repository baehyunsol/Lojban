import words, r

class Cmavo:

    def __init__(self, name, major, minor, docs):
        self.name = name
        self.document = r.search_by_chap(docs, major, minor)

    def to_link(self):
        return f"[{self.name}]({self.document.to_html_string()})"

    def __repr__(self):
        return self.name

class AlphabetIndex:

    def __init__(self, words, prefix):
        self.prefix = prefix
        self.words = [word for word in words if word.name[0] == prefix]

    def to_link(self):
        return f"[{self.prefix}](#index{self.prefix})"

    def to_list_cmavo(self):
        return f"- {self.prefix}[[anchor, id=index{self.prefix}]][[/anchor]]\n  - " + " ".join([word.to_link() for word in self.words])

    def to_list_gismu(self):
        return f"- {self.prefix}[[anchor, id=index{self.prefix}]][[/anchor]]\n" + "\n".join([word.to_list() for word in self.words])

inverse_cmavo_index = {}

for chap, words in words.cmavo.items():
    major, minor = chap.split('.')

    for word in words:
        inverse_cmavo_index[word] = Cmavo(word, int(major), int(minor), r.docs)

cmavo_template = """
# cmavo 목록

해당 cmavo를 클릭하면 그 cmavo를 설명하는 챕터로 이동합니다. 이동한 다음에 Ctrl+F를 이용해서 다시 검색을 하시는게 편합니다.

"""

if __name__ == "__main__":
    cmavo_list = list(inverse_cmavo_index.values())
    cmavo_list.sort(key=lambda c: c.name)

    alphabet_indices = [AlphabetIndex(cmavo_list, c) for c in 'abcdefghijklmnopqrstuvwxyz']
    alphabet_indices = [a for a in alphabet_indices if len(a.words) > 0]

    cmavo_template += "[[giant]]알파벳 색인: " + " ".join([a.to_link() for a in alphabet_indices]) + "[[/giant]]"
    cmavo_template += "\n\n"
    cmavo_template += "\n".join([a.to_list_cmavo() for a in alphabet_indices])

    print(cmavo_template)