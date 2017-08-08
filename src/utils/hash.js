
const HASH_CHUNK_SIZE = 65536 //64 * 1024

const binl2hex = function (a) {
    const b = 255
    const d = '0123456789abcdef'
    let c = 7
    let e = ''

    a[1] += a[0] >> 8;
    a[0] = a[0] & b;
    a[2] += a[1] >> 8;
    a[1] = a[1] & b;
    a[3] += a[2] >> 8;
    a[2] = a[2] & b;
    a[4] += a[3] >> 8;
    a[3] = a[3] & b;
    a[5] += a[4] >> 8;
    a[4] = a[4] & b;
    a[6] += a[5] >> 8;
    a[5] = a[5] & b;
    a[7] += a[6] >> 8;
    a[6] = a[6] & b;
    a[7] = a[7] & b;
    for (d, e, c; c > -1; c--) {
        e += d.charAt(a[c] >> 4 & 15) + d.charAt(a[c] & 15);
    }
    return e;
}

export default function (file, callback) {
    let longs = [];
    let temp = file.size;

    const process = function (chunk) {
      for (let i = 0; i < chunk.length; i++) {
          longs[(i + 8) % 8] += chunk.charCodeAt(i);
      }
    }
    
    const read = function(start, end, cb) {
      const reader = new FileReader();
      reader.onload = e => cb.call(reader, process(e.target.result));
      reader.readAsBinaryString((!end) ? file.slice(start) : file.slice(start, end));
    }


    for (var i = 0; i < 8; i++) {
      longs[i] = temp & 255;
      temp = temp >> 8;
    }

    read(0, HASH_CHUNK_SIZE, function() {
      read(file.size - HASH_CHUNK_SIZE, undefined, function() {
          callback(null, binl2hex(longs), file);
      });
    });
}
