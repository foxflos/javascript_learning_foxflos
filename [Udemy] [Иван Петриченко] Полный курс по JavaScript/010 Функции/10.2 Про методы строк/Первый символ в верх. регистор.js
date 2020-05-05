function ucFirst(string) {
  if (string !="") {
  string = string[0].toUpperCase() + string.substr(1)
  }
return string;
}

ucFirst("вася") == "Вася";
