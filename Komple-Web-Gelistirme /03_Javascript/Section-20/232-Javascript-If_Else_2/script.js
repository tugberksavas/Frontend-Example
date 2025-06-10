// If Else Kosul Ifadeleri - 2

// yas >= 18
// mezuniyet == "lise" yada mezuniyet == "universite"

let yas = 18;
let mezuniyet = "universite";

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "universite")) {
  console.log("ehliyet alabilirsiniz");
} else {
  console.log("ehliyet alamazsiniz");
}

// and (&&)
//  true,true => true
//  false,true => false
//  false,false => false

// veya (||)
// true, true => true
// false,true => true
// false,false => false
