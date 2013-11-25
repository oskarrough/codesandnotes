# Word breaking online in East Asian languages

When a line of text is longer than the width of its container a link break is created in order to fit the boundaries of the container. This is called a 'soft wrap break' and is the default in web browsers. The only alternative is to overflow the container which is often not desirable.

Different writing systems have different rules for when it is allowed to make a 'soft wrap break'. These rules are called 'soft wrap opportunities'.

Latin and other Western language systems use spaces and punctuation to separate words. East Asian Languages as Japanese, Chinese and sometimes also Korean however do not. Instead they rely on syllable boundaries. In these systems a line can break anywhere except between certain character combinations.

In our rule-based computer world this makes things a lot harder. You need a dictionary and thorough understanding of the languages to know when it a 'soft wrap opportunity' can occur.

For instance, here are the [Requirements for Japanese Text Layout](http://www.w3.org/TR/2012/NOTE-jlreq-20120403/).


> The reason is that word breaking in Japanese (and various other languages, especially East Asian languages) is difficult and highly context sensitive. In Western languages we usually have whitespace or punctuation between words and except for some quirks and exceptions, breaking a paragraph into words is usually straightforward and unambiguous.
> In Japanese, on the other hand, words are frequently not separated by spaces and therefore word breaking becomes a guessing game. A good lexicon helps but unless you have a way of verifying that the resulting word broken sentence makes sense semantically (which is what a Japanese speaking human would do), there are usually a number of syntactically valid ways of word breaking a sentence and you have to resort to heuristics for picking what is likelythe right one.

- [link](http://blogs.msdn.com/b/jonasbar/archive/2007/09/21/word-breaking-japanese-is-hard.aspx)


## The CSS property 'line-break'

- http://www.w3.org/TR/css3-text/#line-break

Particularly how wrapping interacts with punctuation and symbols.

line-break: auto|loose|normal|strict;


## The CSS property '[word-break](http://www.w3.org/TR/css3-text/#word-break)'

This property specifies soft wrap opportunities between letters, i.e. where it is “normal” and permissible to break lines within words.

**> word-break: normal;**

usual rules apply

**> word-break: break-all;**

Allow to break between any two letters, rather than only at spaces or hyphenation points. (except where forbidden by the ‘line-break’ property)

Is recommended for CJK texts with few non-CJK texts.

**> word-break: keep-all;**

Breaks between letters are not allowed. Also where they are normally explicitly allowed.

"Don't allow word breaks for CJK text. Non-CJK text behavior is same as normal."

Is recommended for mixed Latin and CJK texts.

## The CSS property 'overflow-wrap'

**> overflow-wrap: normal;**

Lines may break only at allowed break points. However, the restrictions introduced by ‘word-break: keep-all’ may be relaxed to match ‘word-break: normal’ if there are no otherwise-acceptable break points in the line.

**> overflow-wrap: break-word;**

An unbreakable "word" may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line. Shaping characters are still shaped as if the word were not broken, and grapheme clusters must together stay as one unit. No hyphenation character is inserted at the break point.

## Kinsoku shori
> Line breaking rules of Japanese language are determined by JIS X 4051, Japanese Industrial Standard.[1] It describes word wrap rules and processing rules for Japanese language documents. these rules are called Kinsoku Shori(禁則処理, literally process of prohibition rules).

- [Kinsoku shori on Wikipedia](http://en.wikipedia.org/wiki/Kinsoku_shori#Line_breaking_rules_in_Japanese_text_.28Kinsoku_Shori.29)

## Notes
There is only partial browser support of word-break: break-all;
Korean uses spaces between words.

### References

- http://rishida.net/docs/unicode-tutorial/toc
- http://rishida.net/docs/unicode-tutorial/part5
- http://stackoverflow.com/questions/2090302/word-wrap-algorithms-for-japanese
- http://stackoverflow.com/a/1605405/273406
- http://en.wikipedia.org/wiki/List_of_writing_systems
- http://www.omniglot.com/writing/
- http://en.wikipedia.org/wiki/Space_(punctuation)
- http://beta.caniuse.com/#feat=word-break
