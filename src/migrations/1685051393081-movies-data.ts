import { MigrationInterface, QueryRunner } from "typeorm"

export class MoviesData1685051393081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO movies (name, description, genre, rating)
        VALUES
            ('The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Action', 9.0),
            ('American History X', 'Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his footsteps.', 'Drama', 8.5),
            ('Dune', 'A noble family becomes embroiled in a war for control over the galaxy''s most valuable asset while its heir becomes troubled by visions of a dark future.', 'Sci-Fi', 8.0),
            ('Beast', 'A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the Savanna has but one apex predator.', 'Action', 5.6),
            ('Beasts of no nation', 'A drama based on the experiences of Agu, a child soldier fighting in the civil war of an unnamed African country.', 'Drama', 7.7),
            ('American Gangster', 'An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.', 'Police', 7.8),
            ('Platoon', 'Chris Taylor, a neophyte recruit in Vietnam, finds himself caught in a battle of wills between two sergeants, one good and the other evil. A shrewd examination of the brutality of war and the duality of man in conflict.', 'Drama', 8.1),
            ('The Godfather', 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', 'Drama', 9.2),
            ('The Godfather Part 2', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'Drama', 9.0),
            ('American Pie', 'Four teenage boys enter a pact to lose their virginity by prom night.', 'Comedy', 7.0);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE movies`);
    }

}
