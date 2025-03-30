BEGIN {
    split("zh sh ch yu ya ju ej", en_comb_order)
    split("ж ш ч ю я ю э", ru_comb_values)
    for (i=1; i<=length(en_comb_order); i++) {
        comb = en_comb_order[i]
        comb_en[comb] = ru_comb_values[i]
    }
    split("a b c d e f g h i j k l m n o p r s t u v x y z", en_singles)
    split("а б ц д е ф г х и й к л м н о п р с т у в кс ы з", ru_singles)
    for (i=1; i<=length(en_singles); i++) {
        single_en[en_singles[i]] = ru_singles[i]
    }
    split("а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я", ru_chars)
    split("a b v g d e yo zh z i y k l m n o p r s t u f h ts ch sh shch '' y '' e yu ya", en_values)
    for (i=1; i<=length(ru_chars); i++) {
        ru_to_en[ru_chars[i]] = en_values[i]
    }
    for (i=1; i<=length(ru_chars); i++) {
        ru = ru_chars[i]
        en = en_values[i]
        first = toupper(substr(en, 1, 1))
        rest = substr(en, 2)
        ru_to_en[toupper(ru)] = toupper(first) rest
    }
}

{
    if (match($0, /[ЁёА-я]/)) {
        translit_ru_to_en()
    } else {
        translit_en_to_ru()
    }
    print
}

function translit_en_to_ru(    i, comb, key) {
    for (i=1; i<=length(en_comb_order); i++) {
        comb = en_comb_order[i]
        gsub(comb, comb_en[comb], $0)
    }
    for (key in single_en) {
        gsub(key, single_en[key], $0)
    }
    gsub("-", " ");
}

function translit_ru_to_en(    i, ru, en) {
    for (i=1; i<=length(ru_chars); i++) {
        ru = ru_chars[i]
        en = ru_to_en[ru]
        gsub(ru, en, $0)
        ru_upper = toupper(ru)
        en_upper = ru_to_en[ru_upper]
        gsub(ru_upper, en_upper, $0)
    }
    gsub("''", "", $0)
    gsub(/ /, "-");
}