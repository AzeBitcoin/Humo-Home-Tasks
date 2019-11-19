function SumiSvet(){
    let currentMetric = 0,
        tarrif = 0.22,
        date = "",
        isPayed = false,
        metrics = [], 
        currentSum = 0,
        conductor = "",
        paymentDate = "",
        debt = 0,
        prePay = 0;

        this.setMetric = function(newMetric, metricDate){
            currentMetric = newMetric;
            date = metricDate;
            isPayed = true;
            currentSum = -(tarrif*newMetric);
        }

        this.PayBill = function(money, collector){
            let delta = money + currentSum;
            conductor = collector;
            paymentDate = new Date();
            
            if(delta >= 0){
                prePay += delta += debt;
                if(prePay < 0){
                    debt = prePay;
                    prePay = 0;
                }else{
                    debt = 0;
                }

            }else{
                debt += delta += prePay;
                if(debt >= 0){
                    prePay = debt;
                    debt = 0;
                }else{
                    prePay = 0;
                }
            }

            if(!debt){
                isPayed = true;
            }

            metrics.push({
                currentMetric, 
                isPayed, 
                date, 
                currentSum, 
                conductor,
                paymentDate
            })
        }

        this.getBill = function(){
            let bill = {
                currentMetric,
                currentSum,
                date,
                isPayed
            }

            if (isPayed) {
                bill.conductor = conductor;
                bill.paymentDate = paymentDate;
            }

            if(debt){
                bill.debt = debt;
            }else if(prePay){
                bill.prePay = prePay;
            }
            
            return bill;
        }
}

var i = new SumiSvet();

i.setMetric(543, "19.11.2019");
i.PayBill(600, "Kadami Kurbon");

console.log(i.getBill());

i.setMetric(8314, "19.12.19");
i.PayBill(0, "Kadami Kurbon");

console.log(i.getBill());