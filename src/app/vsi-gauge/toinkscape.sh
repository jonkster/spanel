#!/bin/bash
if [ $# -gt 0 ]; then
	cp "$1" "$1.bak"
	cat $1 | sed -e 's/^ *#[A-Za-z]*//' > is-$1
	inkscape is-$1
	cat is-$1 | sed -z -E 's/<metadata.*metadata>//; s/<sodipodi[^>]*>//; s/inkscape:label."([^ "]*)"/\0\n #\1/g' > $1
else
	echo "no file name??"
fi

