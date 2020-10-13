---
type: post
title: FluentDate PHP Class
date: Octomber 13, 2020
excerpt: Format PHP dates with ease. You don't have to Google the format string each time. Use plain English to set the format, almost as you pronounce it.
meta:
  - name: description
    content: Format PHP dates with ease. You don't have to Google the format string each time. Use plain English to set the format, almost as you pronounce it.
comment_link: https://twitter.com/IvanDokov/status/1315957237484007426
---

# FluentDate PHP Class

As a developer who wants to make its life easier I do not like to format dates. I do not know a PHP developer that's not consulting the official PHP documentation in regards to formatting a date in PHP. If you are always using the same format you may have memorised the exact characters that you have to use but when a new format comes to you I am certain you go straight to [https://www.php.net/manual/en/datetime.format.php](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters) or you Google **php date format** since they have moved the table with all format types which was previously at [https://www.php.net/manual/en/function.date.php](https://www.php.net/manual/en/function.date.php).

It's quite often developers to create user land libraries to resolve issues that could be resolved in the language core and for me this is a such case. I got sick of reading the documentation for the same thing over and over again and created a library called [FluentDate](https://github.com/ivandokov/fluentdate) that makes formatting dates a breeze. It's as close as possible to the way you pronounce the date format hence the name. It has no dependencies and has full tests coverage. The tests are the most complete documentation of how to use the library as it is super easy to read thanks to [PEST](https://pestphp.com/) testing library.

## Installation

```bash
composer require ivandokov/fluentdate
```

## How to use

For full details of how to use the library please take a look at the [tests](https://github.com/ivandokov/fluentdate/blob/master/tests/FluentDateTest.php).

### Format DateTime
```php
$datetime = new DateTime('now'); // The DateTime you want to format
$date = FluentDate::forDateTime($datetime)
    ->year(new YearFourDigits())
    ->separator(new SeparatorDot())
    ->month(new MonthTwoDigitsWithLeadingZeros())
    ->separator(new SeparatorDot())
    ->day(new DayWithLeadingZero()); 

echo "Today is $date";
//    Today is 2020.10.13
```

The `$date` can be directly used in strings since it implements `__toString()` magic method but if you want you can use the `->toString()` method.

### The format string

If you want to get the underlying date format string you can use the `->toFormat()` method like this:

```php
$datetime = new DateTime('01.03.2020 00:00:00');
$dateFormat = FluentDate::forDateTime($datetime)
    ->year(new YearFourDigits())
    ->separator(new SeparatorDot())
    ->month(new MonthTwoDigitsWithLeadingZeros())
    ->separator(new SeparatorDot())
    ->day(new DayWithLeadingZero())
    ->toFormat(); 
// Y.m.d
```

### Format Carbon
If you want to format a [Carbon](https://carbon.nesbot.com/) instance you can use the same method described above since Carbon is extending `DateTime`.

```php
$carbon = Carbon::now();
$date = FluentDate::forDateTime($carbon)
    ->year(new YearFourDigits())
    ->separator(new SeparatorDot())
    ->month(new MonthTwoDigitsWithLeadingZeros())
    ->separator(new SeparatorDot())
    ->day(new DayWithLeadingZero())
    ->toString();
// 2020.10.13
```

## Available formats

The format classes are self explanatory by their class names so you can take a look at all available classes in the [Formats](src/Formats) directory. At the time of writing the library support the following format classes:

### DateTime
* `IvanDokov\FluentDate\Formats\DateTimeISO8601`
* `IvanDokov\FluentDate\Formats\DateTimeRFC2822`
* `IvanDokov\FluentDate\Formats\DateTimeUNIXEpoch`

### Time
* `IvanDokov\FluentDate\Formats\Hour12WithLeadingZeros`
* `IvanDokov\FluentDate\Formats\Hour12WithoutLeadingZeros`
* `IvanDokov\FluentDate\Formats\Hour24WithLeadingZeros`
* `IvanDokov\FluentDate\Formats\Hour24WithoutLeadingZeros`
* `IvanDokov\FluentDate\Formats\MinutesWithLeadingZeros`
* `IvanDokov\FluentDate\Formats\SecondsWithLeadingZeros`
* `IvanDokov\FluentDate\Formats\TimeAmPmLowercase`
* `IvanDokov\FluentDate\Formats\TimeAmPmUppercase`
* `IvanDokov\FluentDate\Formats\Microseconds`
* `IvanDokov\FluentDate\Formats\Milliseconds`
* `IvanDokov\FluentDate\Formats\TimeDaylight`
* `IvanDokov\FluentDate\Formats\TimeSwatchInternet`

### Timezone
* `IvanDokov\FluentDate\Formats\Timezone`
* `IvanDokov\FluentDate\Formats\TimezoneAbbreviation`
* `IvanDokov\FluentDate\Formats\TimezoneGMTDifferenceWithColon`
* `IvanDokov\FluentDate\Formats\TimezoneGMTDifferenceWithoutColon`
* `IvanDokov\FluentDate\Formats\TimezoneOffsetInSeconds`

### Day
* `IvanDokov\FluentDate\Formats\DayFullName`
* `IvanDokov\FluentDate\Formats\DayNumberOfYearStartingFromZero`
* `IvanDokov\FluentDate\Formats\DayNumberOneForMonday`
* `IvanDokov\FluentDate\Formats\DayNumberZeroForSunday`
* `IvanDokov\FluentDate\Formats\DayShortName`
* `IvanDokov\FluentDate\Formats\DaySuffix`
* `IvanDokov\FluentDate\Formats\DayWithLeadingZero`
* `IvanDokov\FluentDate\Formats\DayWithoutLeadingZero`

### Month
* `IvanDokov\FluentDate\Formats\MonthFullName`
* `IvanDokov\FluentDate\Formats\MonthNumberOfDays`
* `IvanDokov\FluentDate\Formats\MonthShortName`
* `IvanDokov\FluentDate\Formats\MonthTwoDigitsWithLeadingZeros`
* `IvanDokov\FluentDate\Formats\MonthTwoDigitsWithoutLeadingZeros`

### Year
* `IvanDokov\FluentDate\Formats\YearFourDigits`
* `IvanDokov\FluentDate\Formats\YearLeap`
* `IvanDokov\FluentDate\Formats\YearTwoDigits`

### Week
* `IvanDokov\FluentDate\Formats\WeekNumber`

### Separators

We support the most common separators for dates but also a custom string separator in case of need.

* `IvanDokov\FluentDate\Formats\SeparatorDot`
* `IvanDokov\FluentDate\Formats\SeparatorDash`
* `IvanDokov\FluentDate\Formats\SeparatorForwardSlash`
* `IvanDokov\FluentDate\Formats\SeparatorSpace`
* `IvanDokov\FluentDate\Formats\SeparatorColon`
* `IvanDokov\FluentDate\Formats\SeparatorString`
