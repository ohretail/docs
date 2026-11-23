---
title: Set up your store
linkTitle: Set up your store
description: Your first day on Oh! Retail POS, in order, from accepting your invitation to ringing a test sale.
weight: 10
status: available
---

Work through these steps in order. Most take a few minutes; adding your catalog
takes longest. You need to be an **administrator** for steps 3 and 7, and the
first account we create for your store is one.

## Before you start

You need:

- The invitation email we sent to your store's first administrator.
- A Windows PC for each register, with a touchscreen if you have one.
- A USB barcode scanner, plus the receipt printer, cash drawer, and label
  printer you plan to use.
- Your store's sales tax details, if you collect sales tax.

{{< callout tip >}}
Set your barcode scanner to act as a keyboard and send **Enter** after each
code. That is how most scanners ship. The scanner manual has a barcode to scan if
yours sends something else.
{{< /callout >}}

## 1. Accept your invitation

1. Open the invitation email and choose the link. It works for 72 hours.
2. Choose a password of at least 12 characters.
3. You arrive at the **Dashboard**, the home page for your store. Bookmark it.

If the link has expired, ask us or another administrator to send a new
invitation. On the sign-in page, **Forgot password?** emails a reset link that
works for one hour.

## 2. Enter your company details

Receipts on every register print the company name and address you save here.

1. Open **Back Office**, from the dashboard or the register toolbar.
2. Under **Company Settings**, enter the **Company name** and **Address**. Use
   **New address line** for each extra line.
3. Check **Local timezone**. Choose **Use this computer's timezone** if this PC
   is in the store. Reports and receipts use this time zone.
4. Choose **Save settings**.

## 3. Invite your staff

Everyone signs in with their own account, so sales, drawer counts, and changes
record who made them.

1. On the dashboard, open **Users & invitations**.
2. Under **Invite a user**, enter the person's **Name** and **Email**, and choose
   **Employee** as the **User type**.
3. Leave **Administrator** off for cashiers. Administrators also manage users
   and set up registers, which gives them access to private register setup
   files.
4. Choose **Create invitation**. The person gets an email and chooses their own
   password.

To change someone's type or administrator access later, choose **Edit access**
beside their name. If an invitation email doesn't arrive, the same page has a
private invitation link you can share instead. Send it only to that person.

People who leave stay in the list as **disabled** rather than being deleted, so
the history of what they did stays intact. A store always keeps at least one
administrator: another administrator has to change or disable your own account.

{{< callout note >}}
**Customer** and **Vendor** users are for your customers' and suppliers' own
sign-ins, such as customers paying their charge account online. You don't need
them to get started.
{{< /callout >}}

## 4. Set up sales tax

Oh! Retail does not come with tax rates. Until you review tax setup, registers
calculate no tax.

1. Open **Back Office → Taxes**.
2. Under **Tax setup**, choose one of the following:
   - **No general sales tax (confirmed)**, if your store doesn't collect sales
     tax, as in Oregon. You don't need to add any taxes.
   - **Collect the enabled taxes below**. Then choose **Add tax** for each tax
     you collect, with the label printed on receipts, its rate, and the date the
     rate starts.
3. If some departments or items are taxed differently, add an override for that
   department, or on the item's page. An item override wins over a department
   override, which wins over the tax's default.
4. Choose how tax is rounded, and whether items can be returned without a
   receipt.
5. Check the result with **Preview a sample basket**, which uses your unsaved
   settings. Then choose **Save tax settings**.

Saved changes apply to sales started afterwards. Sales already in progress keep
the settings they started with.

{{< callout warning >}}
Check your rates and which products are taxable with your state and local tax
authority. Oh! Retail calculates what you set up; it can't tell you what to
collect. Every save is kept in **Change history**, and the **Tax report** helps
you reconcile receipts with what you file.
{{< /callout >}}

## 5. Add your catalog

Every item you sell needs a catalog entry with a price. Follow
[Add and edit items](items.md) to add them one at a time.

{{< callout type="tip" title="Moving from another system?" >}}
[Contact us](https://ohretail.com/contact) before you type in a large catalog.
We can often import items, barcodes, and sales history from your current system.
{{< /callout >}}

## 6. Arrange the register menu

The register's touchscreen menu shows tiles for items without barcodes, like
loose produce, feed by the scoop, or a coffee. New items are added to their
department's menu automatically, and all registers share one menu.
[Arrange the register menu](quick-menu.md) shows how to rearrange it.

## 7. Connect printers and the cash drawer

{{< callout note >}}
Installing a register with the Windows app? Skip this step. You choose printers
while you [install the register](local-register/install.md).
{{< /callout >}}

For a browser register:

1. Install the Windows printer drivers for your receipt and label printers, and
   print a Windows test page from each.
2. On the register PC, open **Back Office → Printers on this PC**.
3. Choose **Download Windows printer setup** and open the downloaded file.
4. In setup, enter your store's Oh! Retail address, pick the printers, choose the
   register number, and select **Start helpers automatically when I sign in to
   Windows**. Then choose **Save & start helpers**.
5. Back in the browser, choose **Pair this browser with the POS**. Allow local
   network access if the browser asks.
6. Choose **Print test receipt** and **Print test label**.

The cash drawer connects to the receipt printer, and the register opens it
through the printer. Test receipts leave the drawer closed.
Shelf labels print on 2¼ × 1¼ inch label stock.

## 8. Ring a test sale

1. From the dashboard, open your register, for example **Register 1**.
2. Choose **Open session** and count the cash in the drawer: the number of each
   coin and bill, not a dollar total. Zero is fine.
3. Scan an item, or tap it on the menu.
4. Choose **Payment**, then **Cash**, and tap a bill amount.
5. Check the receipt, and that the drawer opened.

To remove the test sale from your reports, choose **History** beside the scan
bar, select the sale, choose **Void & refund**, pay it back in **Cash**, and
choose **Complete refund**.

{{< shot name="pos-register" alt="The register with two items in the sale, the Feed then Chicken menu open, and Back and Home buttons above the item tiles" caption="The register. The sale is on the left, and the menu path, Back, and Home sit above the tiles." >}}

## 9. Add a customer screen (optional)

If the register has a second monitor facing the customer, open the register
menu, choose the customer view, drag it to the second monitor, and select
**Fullscreen**. It shows each item as it's added and the total. Installed
registers open the customer screen by themselves.

{{< callout type="danger" title="Keep the register browser normal" >}}
Don't use a private or incognito window for a browser register, and don't clear
its browsing data. The register saves each scan in the browser before sending
it, so a dropped connection never loses one.
{{< /callout >}}

## Next steps

- [Install a register](local-register/install.md) that keeps selling during an
  internet outage.
- Read [Add and edit items](items.md) for barcodes, deposits, and price prompts.
