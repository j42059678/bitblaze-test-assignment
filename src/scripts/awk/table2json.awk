BEGIN {
    json = "["
}
NR == 1 {
    for (i = 1; i <= NF; i++) {
        headers[i] = $i
    }
    next
}
{
    data = ""
    for (i = 1; i <= NF; i++) {
        data = data "\"" headers[i] "\": \"" $i "\""
        if (i < NF) data = data ", "
    }
    if (json != "[") {
        json = json ", "
    }
    json = json "{" data "}"
}
END {
    print json "]"
}