const fs = require("fs");
const file = fs.createWriteStream("./big");

for (let i = 0; i <= 1e6; i++) {
  file.write(
    "Lorem ipsum dolor sit amet consectetur adipiscing elit varius interdum molestie hendrerit, \
    nunc conubia augue tristique elementum et senectus venenatis fringilla facilisis ac ante, maecenas leo diam justo eros ad eleifend malesuada neque gravida. \
    Libero proin praesent odio tincidunt cum blandit nam curabitur lacus feugiat, nullam parturient fames metus habitant ullamcorper tempor mus aenean dis sem, \
    tristique primis fringilla mollis cras vehicula ut maecenas eleifend. Non hendrerit nisl lacus risus sed nulla potenti, nullam lectus condimentum tempor \
    ridiculus nascetur, aliquam justo sagittis id vitae quam."
  );
}

file.end();
