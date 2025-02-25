# Pokemon App

This is a simple web application that uses the pokemon apo to display a list of pokemon and there details.

## Challenge

1. Modify the `page.tsx` file to fetch the first 20 pokemon from the pokemon api and display the pokemons name and
there image. The image should be the `front_default` OR IF NULL the first front image that is not null sprite from the pokemon info.
2. Implement the next and previous buttons
    a. next should move to the next 20 pokemon
    b. previous should move to the previous 20 pokemon

## URLS

`@/constants/urls:`:`POKEMON_API_URL`=`https://pokeapi.co/api/v2/pokemon`

Returns a list of pokemon
QUERY PARAMS
    - limit: number of pokemon to return
    - offset: number of pokemon to skip

RESPONSES
    - count: total number of pokemon
    - next: url to the next page
    - previous: url to the previous page
    - results: list of pokemon names and pokemon info urls

```typescript
{
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string; // pokemon info url
    }[]
}
```

`response.results[i].url`: will return the pokemon info
This info is very verbose and contains a lot of data. You only need to extract the sprites field.

```typescript
{
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    }
}
```
