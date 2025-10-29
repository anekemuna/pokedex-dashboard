# Web Development Project 5 - *Pokédex Dashboard*

Submitted by: **Munachimso Aneke**

This web app: **Shows details of Pokemons called from the Pokémon API: [PokéApi](https://pokeapi.co/)**

Time spent: **10.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
    - *No. Pokemons: Number of Pokemon displayed*
    - *Avg Height: Average height of all Pokemons displayed in dm*
    - *Avg Weight: Average weight of all Pokemons displayed in hg*
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

<!-- The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality! -->

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[![Walkthrough](https://img.youtube.com/vi/UgU458DaYfA/0.jpg)](https://www.youtube.com/watch?v=UgU458DaYfA)


Walkthrough Link: [https://youtu.be/UgU458DaYfA]

Walkthrough created with:
[Youtube](https://www.youtube.com/)

<!-- <img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' /> -->

<!-- Replace this with whatever GIF tool you used! -->
<!-- GIF created with ...   -->
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- Figuring out how to call the Pokemon data.
  - The initial pokeapi call only returns the name, and url. I had to add another fetch for each pokemon in the initial call.
- Implementing the filter functionality involved a lot more refactoring than I expected and I got stuck a couple times.

## License

    Copyright [2025] [Munachimso Aneke]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.