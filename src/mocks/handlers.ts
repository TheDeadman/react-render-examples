import { http, HttpResponse } from 'msw';

export type DelaySetting = {
    delay: number;
    statusCode: number;
}

const standardDelay: DelaySetting = {
    delay: 100,
    statusCode: 200
}

function getResponse(data: any, delaySetting: DelaySetting) {
    if (delaySetting.statusCode !== 200 && delaySetting.statusCode !== 204) {
        return HttpResponse.json({}, { status: delaySetting.statusCode })
    }

    return HttpResponse.json(data, { status: delaySetting.statusCode })
}

export function getHandlers() {
    console.log("SETTING HANDLERS")
    const handlers = [
        http.get(/\/search*/, async (req) => {
            console.log("REQ!", req, req.request.url.split("?query="))
            await new Promise((r) => setTimeout(r, standardDelay.delay));
            const searchQuery = req.request.url.split("?query=")[1];
            if (searchQuery) {

                const options = [
                    `${searchQuery} - Option 1`,
                    `${searchQuery} - Option 2`,
                    `${searchQuery} - Option 3`,
                    `${searchQuery} - Option 4`,
                    `${searchQuery} - Option 5`,
                    `${searchQuery} - Option 6`
                ];
                return getResponse(options, standardDelay);
            }
        }),

    ]
    return handlers;
}