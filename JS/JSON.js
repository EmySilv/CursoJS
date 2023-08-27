/*JavaScript #06 - JSON*/

export const JSON = () => {
    const todos = [
        {
            id: 1,
            description: 'estudar programação nessa caraia',
            isCompleted: false
        },
        {
            id: 2,
            description: 'estudar programação nessa caraia',
            isCompleted: true
        },
        {
            id: 3,
            description: 'comer',
            isCompleted: true
        },
    ];

    const todosJSON = JSON.stringify(todos);
    const todosList = JSON.parse(todosJSON);
}