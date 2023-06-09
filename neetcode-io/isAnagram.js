let isAnagram = (s, t) => {
    //split string into an array
    let s1 = s.split('');
    let t1 = t.split('');
    // now compare

    return s1.sort().join('') ===  t1.sort().join('');

}
