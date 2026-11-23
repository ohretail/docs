---
title: Add and edit items
description: Create catalog items, change prices and stock, and set up barcodes, deposits, and register prompts.
weight: 20
status: available
---

Every product you sell is an **item** in your catalog. An item has a name, a
price, and an item number, and can have any number of barcodes. Changes you save
reach every register in the store.

## Find an item

1. Open **Back Office → Item search**, or choose **Scan an item**.
2. In **Find an item**, scan a barcode, or type a name, item number, or barcode.
3. Press {{< kbd "Enter" >}} to open an exact item number or barcode match, or
   pick the item from the list.

A search shows up to 50 matches. Add a word to narrow it down. On a phone or
tablet, **Scan with camera** reads a barcode with the device's camera.

{{< callout tip >}}
Each item page has **QR code for editing**. Scan the code with a phone to edit
the same item while you're standing at the shelf.
{{< /callout >}}

## Create an item

1. Choose **New item**.
2. In **Item number or barcode**, scan the product's barcode, or type the number
   you want to use.
3. Enter the **Name**.
4. Choose **Create item**.

The item opens on its own page. Choose **Edit item** to add its price,
department, and the rest of its details (see below).

### Copy a similar item

To add a product that's like one you already have, such as another flavor or
size, open the existing item and choose **Duplicate item**. Scan or enter the
new barcode, change the name, and save.

A duplicate copies the item's product group, deposits, tagalong items, register
choices, target margin, and payment eligibility. It does **not** copy stock,
barcodes, the vendor product number, or the item's place on the register menu.

## Edit an item

Open the item and choose **Edit item**. Change any of these, then choose **Save
item**, or **Cancel** to leave without saving.

| Field | What it's for |
| --- | --- |
| Name | Shown on the register, receipts, and shelf labels. |
| Department | Groups items for reports, tax rules, and the register menu. **Unassigned** if blank. |
| Price | The regular price for one unit. |
| Cost | What you pay for one unit. Used for margins and inventory value. |
| Vendor | The supplier you buy it from. Printed on shelf tags. |
| Vendor product number | The supplier's order number for it. Printed on shelf tags. |
| In stock | How many you have now. |
| Location | Where it lives in the store, such as an aisle or shelf. |

Sales already rung up keep the name and price they had at the time. Editing an
item changes future sales only.

{{< callout note >}}
Changing an item's **Department** doesn't move its tile on the register menu.
Add it to the new department's menu in the
[menu editor](quick-menu.md#add-move-and-remove-tiles).
{{< /callout >}}

## Adjust stock

The **Inventory** section shows how many are in stock and recent sales. Use the
buttons, **−3**, **−1**, **+1**, **+3**, and **+10**, to correct the count
straight away, for example after finding damaged stock. Each tap saves at once.

For a delivery, receive it instead of adjusting by hand: receiving records the
cost and supplier with the stock. **Incoming stock history** on the item lists
past deliveries.

## Barcodes and alternate SKUs

An item can have several barcodes, such as the manufacturer's UPC and your own
shelf code. Any of them rings up the item.

1. Under **Barcodes & alternate SKUs**, choose **Add barcode**.
2. Scan or type the code in **New barcode or alternate SKU**, and choose **Add**.

To stop a barcode ringing up the item, choose **Remove** beside it.

Leading zeroes are kept, so `012345` and `12345` are different codes. A UPC
printed without its last digit, as on some shortened shelf labels, still finds
the item.

## Prices, product groups, and deals

An item's **Price** is its everyday single-unit price. For prices shared by
several items, and for deals like "6 or more at $1.25 each" or "2 for $3.00",
put the items in a **product group**.

- To join an existing group, start typing in **Product group** on the item and
  pick the group. It saves by itself.
- To start a new group from this item, use **Create product group**, give the
  group a name and price, and choose **Create and assign**. Set the **Group
  price** to 0 to keep each item's own price while still applying the group's
  deals.
- **Manage pricing** opens the full pricing page for the item's group, with
  volume tiers, bundle deals, and department discounts.

Each item belongs to at most one product group.

## Bottle deposits

If an item carries a container deposit, attach your deposit item to it. The
register then adds the deposit automatically whenever the item is sold.

1. In **Bottle deposit**, pick the deposit in **Bottle deposit item**.
2. Set **Containers per item**: 1 for a single can, 6 for a six-pack.
3. Choose **Add bottle deposit**.

The price field then shows **+dep**, and shelf labels print **+dep** under the
price. Oh! Retail may suggest a deposit based on the item's name. Check the
suggestion before adding it.

Deposit rates and which departments hold deposit items are store settings, in
**Back Office → Margins & deposit rules**.

### Other items that ring up together

**Configure tagalong items** attaches any other item, not just a deposit, so it
is added whenever this item is sold. Set how many are added per item.

## Register prompts

Under **Register prompts** in the edit form:

**Prompt for quantity**
: The cashier enters a quantity each time, such as pounds of nails or a count of
  returned bottles. Quantities can have up to three decimal places.

**Prompt for price**
: The cashier enters the price each time, such as for a gift card or a
  donation.

If both are on, the register asks for the quantity first.

## One barcode, several choices

A single barcode or tile can open a choice, for example a can that's sold
singly or as a six-pack. On the item's page, choose **Configure register
choices**, turn choices on, and add the items to choose from with their
quantities. A choice can lead to another choice. The item the cashier finally
picks sets the price and moves the stock.

## Scale labels

If your scale prints price-embedded labels, enter the label's five-digit product
code in **Scale barcode product code**. The register then takes the package
price from the label. Stock counts packages, not pounds. Each code can belong to
only one item or choice. Leave the field blank to turn it off.

## Target margin and taxes

**Target margin**
: When you receive a delivery, prices that fall below this margin are flagged
  for review. Leave it blank to use the department's or the store's target.

**Taxes**
: Override a tax for this item only, with a reason. See
  [Set up your store](store-setup.md#4-set-up-sales-tax).

## Shelf labels

**Print label** prints a shelf tag for the item at its current price, using this
PC's label printer. If no label printer is connected, the tag is added to the
**Shelf labels** queue to print later. **Shelf labels** on the item opens the
label page for more copies or deal labels.

## Delete an item

**Delete item** removes it from the catalog straight away, without asking you to
confirm. It can't be undone, so check you have the right item first. Past sales
keep their record of it.

{{< callout tip >}}
If you only want to stop selling something for a while, remove it from the
register menu and leave it in the catalog, so its sales history and barcodes
stay together.
{{< /callout >}}

## Editing from an installed register

[Installed registers](local-register/_index.md) can edit items even while the
internet is down. Their changes upload when the connection returns. If two
people change the same item at the same time, the change that uploads last is
the one that's kept.
