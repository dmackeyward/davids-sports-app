// Sport.js
export class Sport {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static createMockedSports() {
        return [
            new Sport(
                "Cycling",
                "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as \"cyclists\", \"bicyclists\", or \"bikers\". Apart from two-wheeled bicycles, \"cycling\" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs)."
            ),
            // ... other sports
            new Sport(
                "Volleyball",
                "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules."
            ),
            // Adding more sports
            new Sport(
                "Basketball",
                "Basketball is a game played between two teams of five players each on a rectangular court..."
            ),
            new Sport(
                "Soccer",
                "Soccer, known as football outside North America, is a team sport played with a spherical ball between two teams of 11 players..."
            ),
            new Sport(
                "Swimming",
                "Swimming is an individual or team racing sport that requires the use of one's entire body to move through water..."
            ),
            new Sport(
                "Tennis",
                "Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each..."
            ),
            new Sport(
                "Running",
                "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot..."
            )
        ];
    }
}

// ContentRepository.js
export class ContentRepository {
    getFeaturedSports() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Sport.createMockedSports());
            }, 5000);
        });
    }
}