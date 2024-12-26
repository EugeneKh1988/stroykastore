import { type NextRequest } from 'next/server'
 
export interface ICity {
  id: number;
  name: string;
}
const _cities: ICity[] = [
  {
    id: 1,
    name: "Киев",
  },
  {
    id: 2,
    name: "Львов",
  },
  {
    id: 3,
    name: "Днепр",
  },
  {
    id: 4,
    name: "Харьков",
  },
  {
    id: 5,
    name: "Запорожье",
  },
  {
    id: 6,
    name: "Одесса",
  },
  {
    id: 7,
    name: "Тернополь",
  },
  {
    id: 8,
    name: "Херсон",
  },
  {
    id: 9,
    name: "Ивано-Франковск",
  },
  {
    id: 10,
    name: "Винница",
  },
  {
    id: 11,
    name: "Полтава",
  },
  {
    id: 12,
    name: "Хмельницкий",
  },
  {
    id: 13,
    name: "Ровно",
  },
  {
    id: 14,
    name: "Николаев",
  },
  {
    id: 15,
    name: "Житомир",
  },
  {
    id: 16,
    name: "Луцк",
  },
]; 

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/cities?query=hello
  if(query != null) {
    if (query == "popular") {
      return Response.json(_cities.slice(0, 15));
    } else {
      const foundCities = _cities.filter((city) =>
        city.name.toLowerCase().startsWith(query.toLowerCase())
      );
      return Response.json(foundCities.slice(0,15));
    }
  }
  return Response.json([]);
}