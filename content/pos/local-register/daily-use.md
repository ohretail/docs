---
title: Use an installed register
description: Start the register, sign cashiers in with PINs, keep selling offline, and apply updates.
weight: 20
status: pilot
---

An installed register works like the browser register: scanning, the menu,
payments, receipts, and the drawer are the same. This guide covers what's
different.

## Start the register

If you kept **Start POS when I sign in to Windows**, the register starts when
Windows does. Otherwise open **Oh! Retail** from the desktop.

The cashier screen opens full-size on the cashier monitor, ready for the scanner,
and the customer screen opens full-screen on the second monitor. If the PC has
no second monitor, only the cashier screen opens.

## Sign in and switch cashiers

1. On the cashier screen, choose your name.
2. Enter your six-digit PIN.

The register shows who is signed in. When you step away or hand over, choose
**Lock / Switch cashier**. The sale stays where it was, and the next cashier can
pick it up.

- The register locks itself after **five minutes** without a tap or keypress.
- A PIN sign-in ends after **ten hours**, and whenever the register restarts.
- While nobody is signed in, the customer screen shows a welcome page.

PIN sign-in covers selling: sales, customer lookup, the drawer, receipts, and
restarting for an update. To edit items, change settings, or see reports,
choose **Manager sign-in** and use your email and password.

{{< callout type="note" title="Forgotten or locked PIN" >}}
After too many wrong PINs, the register makes the cashier wait, a little longer
each time. After ten wrong tries, a manager has to reset the PIN: choose
**Manager sign-in**, open **Cashier PINs**, and choose **Enable / Reset PIN** for
that person.
{{< /callout >}}

## Take payments

Installed registers take every kind of sale the browser register does: cash,
check, and customer charge accounts, split payments, returns, voids, and
account payments.

For cards, take the payment on your card terminal as usual. When the terminal
approves it, choose **Card** on the register and confirm the approval. Ask us if
you'd like an integrated card reader on an installed register.

## When the internet goes down

Keep selling. The register saves every sale on the PC, and the status line on the
register reads **Changes saved on this PC · upload pending** until it can upload.
When the connection returns, it uploads everything in order and the status line
changes to **Changes uploaded**.

While offline, you can still:

- Ring sales, returns, and voids, and take payments.
- Open and close drawer sessions, and print receipts and labels.
- Sign cashiers in with their PIN or password.
- Edit items, prices, the register menu, customers, and labels.

These wait until you're back online:

- Receiving deliveries, stock counts, and imports.
- Integrated card readers that connect through Oh! Retail's servers.
- Inviting or changing users, customer and vendor sign-ins, and email.
- Store-wide stock levels and reports. They include offline sales once the
  register has uploaded them.

{{< callout type="warning" title="Check accounts and returns after an outage" >}}
While offline, each register checks charge account limits and returns against
what it last downloaded. Two offline registers could therefore together go over
an account's limit, or accept a return for the same receipt line twice. Review
account and sales reports after a long outage.
{{< /callout >}}

## Changes from other registers

Each register uploads its changes as they happen and checks for changes from
other registers about every 15 seconds. If two people edit the same item, menu,
or setting at the same time, the change that uploads last is kept.

## Updates

Registers download updates by themselves in the background. Every update is
signed, and the register checks the signature before using it.

When an update is ready, the register header shows **Update available** with a
**Restart POS** button. Finish or hold the current sale, then choose **Restart
POS**. The register restarts on the new version, including its printers.
Restarting signs out every PIN cashier.

The register won't restart while a sale is unfinished, a scan or payment is
still sending, or a card payment is in progress.

You can check every register's version in **Back Office → Local registers**.
**Update pending** marks a register that's running an older version than the
latest release.

## Close the register

Close either register window, or press {{< kbd "Alt" >}}+{{< kbd "F4" >}}, to close
the app. An unpaid sale is kept for next time.

If a card payment is in progress, the register stays open and says why. Finish
the payment on the terminal, remove the card if asked, then close it again.

{{< callout danger >}}
Don't end the app from Task Manager or turn the PC off while a card payment is
in progress. If that happens, check the terminal and the sale when the register
reopens.
{{< /callout >}}

## Look after the register PC

- Keep the PC and its Windows account for store use only.
- Use the same Windows account every day. The register is installed for that
  account.
- Don't delete or move anything in the register's data folder,
  `%LOCALAPPDATA%\oh-retail-pos\register-N`. It holds sales that may not have
  uploaded yet.
- Keep the register number on this PC only. Never copy the data folder to
  another PC.

Something not right? See [Fix installed register problems](troubleshooting.md).
