import React from 'react';
import '../style/Nutrition.css';

const Nutrition = () => {
    const nutritionPoints = [
        'Macronutrient balance: ensuring adequate protein, carbohydrates, and healthy fats to support muscle growth and recovery.',
        'Caloric intake: Managing caloric intake to support muscle gain or fat loss, depending on individual goals.',
        'Meal frequency and timing: Eating regular meals to maintain energy levels and support muscle growth.',
        'Hydration: Adequate water intake to support muscle function and recovery.',
        'Supplementation: Using natural supplements like protein powder, creatine, and branched-chain amino acids (BCAAs) to support muscle growth and recovery.',
        'Food quality: emphasizing whole, unprocessed foods like lean meats, fish, eggs, fruits, and vegetables.',
        'Avoiding processed foods: Limiting or avoiding foods high in sugar, salt, and unhealthy fats.',
        'Pre- and post-workout nutrition: Fueling the body with the right foods before and after workouts to support performance and recovery.',
        'Individualized nutrition plans: Creating personalized nutrition plans based on individual needs, goals, and progress.',
        'Education and support: Providing resources, workshops, and mentorship to help members make informed nutrition choices.'
    ];

    const nutritionBenefits = [
        'Support muscle growth and recovery.',
        'Enhance overall health and well-being.',
        'Improve athletic performance.',
        'Achieve their bodybuilding goals.',
        'Develop sustainable, healthy habits.'
    ];

    return (
        <section className="nutrition">
            <div className="container">
                <h1 className="nutrition-title">Nutrition in Natural Bodybuilding</h1>
                <p className="nutrition-intro">
                    Nutrition plays a crucial role in natural bodybuilding, and here are some ways it can impact food or drink consumption in the Natural Bodybuilding Association of Nigeria:
                </p>
                <div className="nutrition-content">
                    <div className="nutrition-text">
                        <ul className="nutrition-list">
                            {nutritionPoints.map((item, index) => (
                                <li key={index}>
                                    <div className="list-number">{index + 1}</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <p className="nutrition-summary">
                    By emphasizing proper nutrition, the Natural Bodybuilding Association of Nigeria can help its members:
                </p>
                <ul className="nutrition-benefits">
                    {nutritionBenefits.map((item, index) => (
                        <li key={index}>
                            <div className="list-number">{index + 1}</div>
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="nutrition-conclusion">
                    This can be achieved through workshops, seminars, online resources, and one-on-one coaching or mentoring.
                </p>
            </div>
        </section>
    );
};

export default Nutrition;
