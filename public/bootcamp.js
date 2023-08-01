document.addEventListener('alpine:init', () => {
    Alpine.data('bootcampAPI', () => {
        return {
            sentence : '',
            longestWord: '',
            shortestWord: '',
            wordCount: 0,
            phoneBill: '',
            billMessage: '',
            projectedUsage : '',
            airtimeAvailable : 0,
            airtimeMessage : '',


            checkSentence() {
               
    
                axios.get(`/api/word_game?sentence=${this.sentence}`)
                .then((result) => {
                    this.longestWord = result.data.longestWord;
                    this.shortestWord = result.data.shortestWord;
                    this.wordCount = result.data.wordCount;
                })
            },


            totalPhoneBill() {
                axios.get(`/api/phonebill/prices?phoneBill=${this.phoneBill}`)
                .then(result => {
                    this.billMessage = result.data.bill;
                })
            },

            calculate() {

                axios.get(`/api/enough?projectedUsage=${this.projectedUsage}&airtimeAvailable=${this.airtimeAvailable}`)
                .then(result => {
                    if (result.data.error) {
                        alert (result.data.error);
                } else {
                    this.airtimeMessage = result.data.totalBill;
                }}
                )}

}
        })
        });
