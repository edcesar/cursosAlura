class DateHelper 
{

   constructor() 
   {
       throw new Error('DateHelper não pode ser instanciada');
   }
    
   static stringToDate(string) 
   {
        if (!/\d{4}-\d{2}-\d{2}/.test(string))
            throw new Error('A data deve estar no formato aaaa-mm-dd');

        return new Date(...string.split('-').map( (value, key) => value - key % 2));
   }

   static dateToString(data)
   {
      //  return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

      return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
   }
}