// Uses break and continue

// Break
for (var i = 0; i <= 100; i++) {
    if (i == 10) {
        break
    }

    document.write(" " + i)
}

document.write("<br>" + "End" + "<br>")

// Continue
for (var i = 0; i <= 110; i++) {
    if (i == 100) {
        continue
    }

    document.write(" " + i)
}

document.write("<br>" + "End" + "<br>")

// Continue
for (var i = 0; i <= 110; i++) {
    if (i % 2 == 0) {
        continue
    }

    document.write(" " + i)
}
document.write("<br>" + "End" + "<br>")

// Continue
for (var i = 1; i <= 110; i++) {
    if (i == 20) {
        break
    }

    document.write(" " + i)
}