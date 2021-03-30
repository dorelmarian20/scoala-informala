import toJS from 'jquery-to-javascript';

const script = `$(".detail").html("<b>any text</b>");`;

toJS.convert(script);