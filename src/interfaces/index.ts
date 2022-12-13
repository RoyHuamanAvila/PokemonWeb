export interface PokedexData {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}


export interface Pokemon {
    idCaptured?:               string;
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    description?:             string;
    order:                    number;
    past_types:               any[];
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    Species;
}

export interface Move {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export interface Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export interface RedBlue {
    back_default:      string;
    back_gray:         string;
    back_transparent:  string;
    front_default:     string;
    front_gray:        string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export interface Crystal {
    back_default:            string;
    back_shiny:              string;
    back_shiny_transparent:  string;
    back_transparent:        string;
    front_default:           string;
    front_shiny:             string;
    front_shiny_transparent: string;
    front_transparent:       string;
}

export interface Gold {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald:             Emerald;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export interface Emerald {
    front_default: string;
    front_shiny:   string;
}

export interface Home {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}

export interface Box {
    pokemons: Pokemon[]
}

export interface PokemonEspecie {
    base_happiness:         number;
    capture_rate:           number;
    color:                  Color;
    egg_groups:             Color[];
    evolution_chain:        EvolutionChain;
    evolves_from_species:   Color;
    flavor_text_entries:    FlavorTextEntry[];
    form_descriptions:      FormDescription[];
    forms_switchable:       boolean;
    gender_rate:            number;
    genera:                 Genus[];
    generation:             Color;
    growth_rate:            Color;
    habitat:                null;
    has_gender_differences: boolean;
    hatch_counter:          number;
    id:                     number;
    is_baby:                boolean;
    is_legendary:           boolean;
    is_mythical:            boolean;
    name:                   string;
    names:                  Name[];
    order:                  number;
    pal_park_encounters:    any[];
    pokedex_numbers:        PokedexNumber[];
    shape:                  Color;
    varieties:              Variety[];
}

export interface Color {
    name: string;
    url:  string;
}

export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language:    Color;
    version:     Color;
}

export interface FormDescription {
    description: string;
    language:    Color;
}

export interface Genus {
    genus:    string;
    language: Color;
}

export interface Name {
    language: Color;
    name:     string;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex:      Color;
}

export interface Variety {
    is_default: boolean;
    pokemon:    Color;
}
