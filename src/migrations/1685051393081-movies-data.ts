import { MigrationInterface, QueryRunner } from "typeorm"

export class MoviesData1685051393081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO movies (name, description, genre, rating, cover_picture, actors)
        VALUES
            ('The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Action', 9.0, 'dark_knight.jpg', ARRAY['Christian Bale', 'Michael Caine', 'Heath Ledger', 'Gary Oldman', 'Aaron Eckhart', 'Maggie Gyllenhaal', 'Morgan Freeman']),
            ('American History X', 'Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his footsteps.', 'Drama', 8.5, 'american_history_x.jpg', ARRAY['Edward Norton', 'Edward Furlong', 'Fairuza Balk', 'Stacy Keach', 'Elliott Gould', 'Avery Brooks', 'Beverly D'Angelo']),
            ('Dune', 'A noble family becomes embroiled in a war for control over the galaxy''s most valuable asset while its heir becomes troubled by visions of a dark future.', 'Sci-Fi', 8.0, 'dune.jpg', ARRAY['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac', 'Josh Brolin', 'Stellan Skarsgård', 'Dave Bautista', 'Stephen McKinley Henderson', 'Zendaya', 'David Dastmalchian', 'Chang Chen', 'Sharon Duncan-Brewster', 'Charlotte Rampling', 'Jason Momoa', 'Javier Bardem']),
            ('Beast', 'A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one apex predator.', 'Action', 5.6, 'beast.jpg', ARRAY['Idris Elba', 'Sharlto Copley', 'Iyana Halley', 'Leah Sava Jeffries']),
            ('Beasts of no nation', 'A drama based on the experiences of Agu, a child soldier fighting in the civil war of an unnamed African country.', 'Drama', 7.7, 'beasts_of_no_nation.jpg', ARRAY['Idris Elba', 'Kurt Egyiawan', 'Jude Akuwudike', 'Emmanuel "King King" Nii Adom Quaye', 'Abraham Attah']),
            ('American Gangster', 'An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.', 'Police', 7.8, 'american_gangster.jpg', ARRAY['Russell Crowe', 'Denzel Washington', 'Chiwetel Ejiofor', 'Cuba Gooding Jr.', 'Josh Brolin', 'Ted Levine', 'Armand Assante', 'John Ortiz', 'John Hawkes', 'RZA']),
            ('Platoon', 'Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.', 'Drama', 8.1, 'platoon.jpg', ARRAY['Tom Berenger', 'Willem Dafoe', 'Charlie Sheen']),
            ('The Godfather', 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', 'Drama', 9.2, 'the_godfather.jpg', ARRAY['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano', 'Robert Duvall', 'Sterling Hayden', 'John Marley', 'Richard Conte', 'Diane Keaton']),
            ('The Godfather Part 2', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'Drama', 9.0, 'the_godfather_part_2.jpg', ARRAY['Al Pacino', 'Robert Duvall', 'Diane Keaton', 'Robert De Niro', 'Talia Shire', 'Morgana King', 'John Cazale', 'Mariana Hill', 'Lee Strasberg']),
            ('American Pie', 'Four teenage boys enter a pact to lose their virginity by prom night.', 'Comedy', 7.0, 'american_pie.jpg', ARRAY['Chris Klein', 'Eugene Levy', 'Natasha Lyonne', 'Thomas Ian Nicholas', 'Seann William Scott', 'Tara Reid', 'Mena Suvari', 'Eddie Kaye Thomas']);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE movies`);
    }

}
