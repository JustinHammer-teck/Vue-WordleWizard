export default async function processWordsService(resourceUrl: string, data: any) {
    const response = await fetch(resourceUrl, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        })
        .then(err => {
            console.log();
        });

    return response
}
