let balance = 0;

function showDeposit() {
    const actionForm = document.getElementById('actionForm');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    message.classList.remove('show');
    actionForm.classList.add('show');
    submitBtn.onclick = function () {
        deposit();
    };
}

function showWithdraw() {
    const actionForm = document.getElementById('actionForm');
    const submitBtn = document.getElementById('submitBtn');
    const message = document.getElementById('message');
    message.classList.remove('show');
    actionForm.classList.add('show');
    submitBtn.onclick = function () {
        withdraw();
    };
}

function showBalance() {
    const message = document.getElementById('message');
    message.textContent = `Your current balance is $${balance.toFixed(2)}`;
    message.classList.add('show');
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const message = document.getElementById('message');
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        message.textContent = `Successfully deposited $${amount.toFixed(2)}.`;
    } else {
        message.textContent = 'Enter a valid amount to deposit.';
    }
    message.classList.add('show');
    document.getElementById('amount').value = '';
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    const message = document.getElementById('message');
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        message.textContent = `Successfully withdrew $${amount.toFixed(2)}.`;
    } else if (amount > balance) {
        message.textContent = 'Insufficient funds.';
    } else {
        message.textContent = 'Enter a valid amount to withdraw.';
    }
    message.classList.add('show');
    document.getElementById('amount').value = '';
}
