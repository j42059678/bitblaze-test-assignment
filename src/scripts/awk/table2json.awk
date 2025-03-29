BEGIN {
    print "["
}
NR == 1 {
    for (i = 1; i <= NF; i++) {
        headers[i] = $i
    }
    next
}
{
    json = "{"
    for (i = 1; i <= NF; i++) {
        json = json "\"" headers[i] "\": \"" $i "\""
        if (i < NF) json = json ", "
    }
    json = json "},"
    print json
}
NR == FNR {
    json = "{"
    for (i = 1; i <= NF; i++) {
        json = json "\"" headers[i] "\": \"" $i "\""
        if (i < NF) json = json ", "
    }
    json = json "}"
    print json
}
END {
    print "]"
}