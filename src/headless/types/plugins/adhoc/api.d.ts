declare namespace _default {
    namespace adhoc {
        /**
         * @method api.adhoc.getCommands
         * @param {string} to_jid
         */
        function getCommands(to_jid: string): Promise<import("./utils.js").AdHocCommand[]>;
        /**
         * @method api.adhoc.fetchCommandForm
         * @param {string} jid
         * @param {string} node
         * @returns {Promise<AdHocCommandResult>}
         */
        function fetchCommandForm(jid: string, node: string): Promise<import("./utils.js").AdHocCommandResult>;
        /**
         * @method api.adhoc.runCommand
         * @param {String} jid
         * @param {String} sessionid
         * @param {AdHocCommandAction} action
         * @param {String} node
         * @param {Array<{ [k:string]: string }>} inputs
         */
        function runCommand(jid: string, sessionid: string, node: string, action: AdHocCommandAction, inputs: {
            [k: string]: string;
        }[]): Promise<{
            note: any;
            sessionid?: string;
            title?: string;
            instructions?: string;
            fields?: import("./utils.js").TemplateResult[];
            actions?: string[];
            status: any;
        }>;
    }
}
export default _default;
export type AdHocCommand = import('./utils').AdHocCommand;
export type AdHocCommandResult = import('./utils').AdHocCommandResult;
export type AdHocCommandAction = 'execute' | 'cancel' | 'prev' | 'next' | 'complete';
//# sourceMappingURL=api.d.ts.map