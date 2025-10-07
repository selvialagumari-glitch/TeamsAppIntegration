window.getTeamsContext = async function () {
    if (window.microsoftTeams) {
        try {
            await microsoftTeams.app.initialize();
            const context = await microsoftTeams.app.getContext();
            return {
                userPrincipalName: context.user?.userPrincipalName || "",
                displayName: context.user?.displayName || ""
            };
        } catch (e) {
            console.error("Error getting Teams context:", e);
            return null;
        }
    } else {
        return null;
    }
};

window.openFileSmart = async function (url) {
    if (window.microsoftTeams) {
        try {
            await microsoftTeams.app.initialize();
            microsoftTeams.openLink(url);
        } catch (e) {
            console.error("Teams openLink failed, falling back:", e);
            window.open(url, "_blank");
        }
    } else {
        window.open(url, "_blank");
    }
};
